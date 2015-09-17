package org.jboss.tools.examples.concurrency.managedexecutor;

import java.util.concurrent.CountDownLatch;

/** some.
 * @author Arun Gupta
 */
public class TestStatus {
  public static CountDownLatch latch;
  public static boolean foundTransactionScopedBean;
}
