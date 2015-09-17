package org.jboss.tools.examples.test;

import static org.junit.Assert.assertNotNull;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ArchivePaths;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.WebArchive;

import org.jboss.tools.examples.rest.SimpleJobRestService;
import org.jboss.tools.examples.util.Resources;

import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.logging.Logger;
import javax.inject.Inject;

@RunWith(Arquillian.class)
public class SimpleJobRestServiceTest {
  /** some.
 * @return xxx
 */
  @Deployment
  public static WebArchive createDeployment() {
    WebArchive war = ShrinkWrap.create(WebArchive.class, "test.war")
            .addPackages(true, "org.jboss.tools.examples")
            .addClasses(BatchTestHelper.class)
            .addAsWebInfResource(EmptyAsset.INSTANCE,ArchivePaths.create("beans.xml"))
            .addAsResource("META-INF/batch-jobs/simplejob.xml")
            .addAsResource("META-INF/test-persistence.xml","META-INF/persistence.xml")
            .addClasses(Resources.class)
            .addAsWebInfResource("test-ds.xml")
        ;
    System.out.println(war.toString(true));
    return war;
  }

  @Inject
  Logger log;
   
  @Inject
  SimpleJobRestService simplejobservice;

  @Test
  public void executeTest() throws Exception {
    assertNotNull(simplejobservice);

    log.info("\n== BATCH REST SERVICE RESULT ==\n" 
        + simplejobservice.execute());
  }
}
