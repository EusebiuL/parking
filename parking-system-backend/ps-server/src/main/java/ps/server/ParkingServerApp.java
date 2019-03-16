package ps.server;

/**
 * @author Denis-Eusebiu Lazar eusebiu.lazar@busymachines.com
 * @since 16/03/19
 */

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ParkingServerApp {

    public static void main(String[] args) {
        SpringApplication.run(ParkingServerApp.class, args);
    }
}
