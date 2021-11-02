package co.usa.reto3.reto3.repository.crud;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import co.usa.reto3.reto3.model.Reservation;

public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {

    //JPQL

     @Query("select r.client, COUNT(r.client) from Reservation as r group by r.client order by COUNT(r.client) desc")
     public List<Object[]> countClientsByReservation();

    //Query methods

    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date initDate, Date finalDate);

    public List<Reservation> findAllByStatus(String status);


}
