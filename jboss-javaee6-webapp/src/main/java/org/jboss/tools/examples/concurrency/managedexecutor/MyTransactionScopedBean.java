package org.jboss.tools.examples.concurrency.managedexecutor;

import java.io.Serializable;

/** some.
 * @author Arun Gupta
 */
@javax.transaction.TransactionScoped
public class MyTransactionScopedBean implements Serializable {

  private static final long serialVersionUID = 1L;

  public boolean isInTx() {
    return true;
  }
}
