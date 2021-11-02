package co.usa.reto3.reto3.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.repository.crud.ReservationCrudRepository;
import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.model.Reports.CountClients;


@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAll() {
        return (List<Reservation>) reservationCrudRepository.findAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationCrudRepository.findById(id);
    }

    public Reservation save(Reservation newReservation) {
        return reservationCrudRepository.save(newReservation);
    }

    public void delete(Reservation reservation) {
        reservationCrudRepository.delete(reservation);
    }

    public List<Reservation> getReservationsByStatus(String status) {
        return reservationCrudRepository.findAllByStatus(status);
    }

    public List<Reservation> getReservationsByDates(Date iniDate, Date finalDate) {
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(iniDate, finalDate);
    }

    public List<CountClients> getTopClients(){
        List<Object[]> report = reservationCrudRepository.countClientsByReservation();
        List<CountClients> res = new ArrayList<>();

        for (int i = 0; i < report.size(); i++) {
            res.add(new CountClients((Long) report.get(i)[1], (Client) report.get(i)[0]));
        }

        return res;
    }

}
