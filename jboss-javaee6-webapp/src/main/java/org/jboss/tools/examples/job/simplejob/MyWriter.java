package org.jboss.tools.examples.job.simplejob;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.Serializable;
import java.util.List;

import javax.batch.runtime.context.JobContext;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.inject.Named;

@Dependent
@Named("MyWriter")
public class MyWriter implements javax.batch.api.chunk.ItemWriter {
  private BufferedWriter bwriter;
    
  @Inject
  private JobContext jobCtx;

  @Override
  public void open(Serializable ckpt) throws Exception {
    String fileName = jobCtx.getProperties()
                                .getProperty("output_file");
    bwriter = new BufferedWriter(new FileWriter(fileName, 
                                                    (ckpt != null)));
  }

  @Override
  public void writeItems(List<Object> items) throws Exception {
    for (int i = 0; i < items.size(); i++) {
      String line = (String) items.get(i);
      bwriter.write(line);
      bwriter.newLine();
    }
  }

  @Override
  public Serializable checkpointInfo() throws Exception {
    return new MyCheckpoint();
  }

  @Override
  public void close() throws Exception {
    bwriter.close();
  }
}
