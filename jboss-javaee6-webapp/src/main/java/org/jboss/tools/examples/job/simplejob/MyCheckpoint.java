package org.jboss.tools.examples.job.simplejob;

import java.io.Serializable;

@SuppressWarnings("serial")
public class MyCheckpoint implements Serializable {
    
  private long lineNum = 0;
    
  public void increase() { 
    lineNum++; 
  }
  
  public long getLineNum() { 
    return lineNum; 
  }
}