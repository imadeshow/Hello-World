package org.jboss.tools.examples.test;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ArchivePaths;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.WebArchive;

import org.jboss.tools.examples.util.Resources;

import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.logging.Logger;

import javax.batch.operations.JobOperator;
import javax.batch.runtime.BatchRuntime;
import javax.batch.runtime.JobExecution;
import javax.batch.runtime.Metric;
import javax.batch.runtime.StepExecution;
import javax.inject.Inject;

@RunWith(Arquillian.class)
public class SimpleJobTest {

  /** some.
  * @return xxx
  */
  @Deployment
  public static WebArchive createDeployment() {
    WebArchive war = ShrinkWrap.create(WebArchive.class, "test.war")
            .addClasses(BatchTestHelper.class)
            .addPackage("org.jboss.tools.examples.job.simplejob")
            .addAsWebInfResource(EmptyAsset.INSTANCE, ArchivePaths.create("beans.xml"))
            .addAsResource("META-INF/batch-jobs/simplejob.xml")
            .addAsResource("META-INF/test-persistence.xml", "META-INF/persistence.xml")
            .addClasses(Resources.class)
            .addAsWebInfResource("test-ds.xml")
        ;
    System.out.println(war.toString(true));
    return war;
  }

  @Inject
  Logger log;

  @Test
  public void simplejobTest() throws Exception {
    JobOperator jobOperator = BatchRuntime.getJobOperator();
    Long executionId = jobOperator.start("simplejob", new Properties());
    JobExecution jobExecution = jobOperator.getJobExecution(executionId);

    BatchTestHelper.keepTestAlive(jobExecution);

    List<StepExecution> stepExecutions = jobOperator.getStepExecutions(executionId);
    for (StepExecution stepExecution : stepExecutions) {
      String stepName = stepExecution.getStepName();

      switch (stepName) {
        case "mychunk":
        case "mytask":
          Map<Metric.MetricType, Long> metricsMap 
              = BatchTestHelper.getMetricsMap(stepExecution.getMetrics());
                
          log.info("===== STEP NAME:" + stepName + "=====");
          log.info("READ COUNT:" + metricsMap.get(Metric.MetricType.READ_COUNT).longValue());
          log.info("WRITE COUNT:" + metricsMap.get(Metric.MetricType.WRITE_COUNT).longValue());
          log.info("COMMIT COUNT:" + metricsMap.get(Metric.MetricType.COMMIT_COUNT).longValue());
          break;
        default:
          break; // do nothing
      }
    }
  }
}
