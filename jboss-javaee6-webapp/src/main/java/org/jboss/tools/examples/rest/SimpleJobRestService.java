package org.jboss.tools.examples.rest;

import java.io.BufferedReader;
import java.io.FileReader;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/job")
@RequestScoped
public class SimpleJobRestService {
  /**
  * @return xxx
  * @throws Exception xxx.
  */
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String execute() throws Exception {

    BufferedReader reader = new BufferedReader(new FileReader("d:\\testdata\\test_out.txt"));
    StringBuilder buf = new StringBuilder();
    String line = null;
    while ((line = reader.readLine()) != null) {
      buf.append(line).append("\n");
    }
    reader.close();
    return buf.toString();
  }
}
