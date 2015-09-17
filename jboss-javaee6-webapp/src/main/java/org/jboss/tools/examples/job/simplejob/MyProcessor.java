package org.jboss.tools.examples.job.simplejob;

import javax.enterprise.context.Dependent;
import javax.inject.Named;

@Dependent
@Named("MyProcessor")
public class MyProcessor implements javax.batch.api.chunk.ItemProcessor {
  public MyProcessor() {}

  @Override
  public Object processItem(Object obj) throws Exception {
    String line = (String) obj;
    return line.toUpperCase();
  }
}