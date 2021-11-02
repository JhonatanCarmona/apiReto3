package co.usa.reto3.reto3.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.model.Reports.CountClients;
import co.usa.reto3.reto3.model.Reports.CountReservationStatus;
import co.usa.reto3.reto3.repository.ReservationRepository;

/**
 * This class defines the operations that can be donde in the Table Reservations
 */
@Service
public class ReservationService {
    @Autowired
    ReservationRepository reservationRepository;

    /**
     * This method returns all the elements of the table
     * 
     * @return an object with all the elements of the table
     */
    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    /**
     * This method return one element of the table
     * 
     * @param id: id of the element
     * @return an object with the element
     */
    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    /**
     * This method save a new entry on the table
     * 
     * @param newReservation: the element to save
     * @return
     */
    public Reservation save(Reservation newReservation) {
        // check if id is null
        if (newReservation.getIdReservation() == null) {
            // newReservation.setStatus("created");
            return reservationRepository.save(newReservation);
        } else {
            Optional<Reservation> queryReservation = reservationRepository
                    .getReservation(newReservation.getIdReservation());

            if (queryReservation.isEmpty()) {
                return reservationRepository.save(newReservation);
            } else {
                return newReservation;
            }
        }
    }

    /**
     * This method delete by id an element of the table
     * 
     * @param id
     * @return
     */
    public boolean deleteReservation(int id) {
        Optional<Reservation> queryReservation = reservationRepository.getReservation(id);
        if (!queryReservation.isEmpty()) {
            reservationRepository.delete(queryReservation.get());
            return true;
        }
        return false;
    }

    /**
     * This method updates an element of the table
     * 
     * @param upReservation
     * @return
     */
    public Reservation update(Reservation upReservation) {
        if (upReservation.getIdReservation() != null) {
            Optional<Reservation> queryReservation = reservationRepository
                    .getReservation(upReservation.getIdReservation());
            if (!queryReservation.isEmpty()) {

                if (upReservation.getStartDate() != null) {
                    queryReservation.get().setStartDate(upReservation.getStartDate());
                }

                if (upReservation.getDevolutionDate() != null) {
                    queryReservation.get().setDevolutionDate(upReservation.getDevolutionDate());
                }

                if (upReservation.getAudience() != null) {
                    queryReservation.get().setAudience(upReservation.getAudience());
                }

                return reservationRepository.save(queryReservation.get());
            }
        }
        return upReservation;
    }

    /**
     * This method return the list of clients and their reservations
     * 
     * @return
     */
    public List<CountClients> getTopClients() {
        return reservationRepository.getTopClients();
    }

    /**
     * This method return the reservations completed and cancelled
     * 
     * @return
     */
    public CountReservationStatus getStatusReport() {
        List<Reservation> completed = reservationRepository.getReservationsByStatus("completed");
        List<Reservation> cancelled = reservationRepository.getReservationsByStatus("cancelled");

        CountReservationStatus statusReport = new CountReservationStatus(completed.size(), cancelled.size());

        return statusReport;
    }

    /**
     * This method return reservations by date
     * 
     * @param date1
     * @param date2
     * @return
     */
    public List<Reservation> getReservationByDate(String date1, String date2) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date iniDate = new Date();
        Date finalDate = new Date();

        try {
            iniDate = format.parse(date1);
            finalDate = format.parse(date2);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        if (iniDate.before(finalDate)) {
            return reservationRepository.getReservationsByDates(iniDate, finalDate);
        } else {
            return new ArrayList<>();
        }

    }
}
