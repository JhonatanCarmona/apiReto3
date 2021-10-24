package co.usa.reto3.reto3.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * This class defines the entity Audience.
 */
@Entity
@Table(name = "Audience")
public class Audience implements Serializable {

    /**
     * Declaration of variables
     */

    /** Audience's Id */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /** Audience's Name */
    private String name;

    /** Audience's Owner */
    private String owner;

    /** Audience's Capacity */
    private Integer capacity;

    /** Audience's Description */
    private String description;

    /** Audience's Category */
    @ManyToOne
    @JoinColumn(name = "categoryId")
    @JsonIgnoreProperties("audiences")
    private Category category;

    /** Audience's Message */
    @OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "audience")
    @JsonIgnoreProperties({ "audience", "client" })
    private List<Message> messages;

    /** Audience's Reservations */
    @OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "audience")
    @JsonIgnoreProperties({ "audience", "client" })
    private List<Reservation> reservations;

    /**
     * 
     * @return The messages of the auditory
     */
    public List<Message> getMessages() {
        return messages;
    }

    /**
     * 
     * @param messages Set Messages for the auditory
     */
    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    /**
     * 
     * @return the auditory's id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 
     * @param id set auditory's id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 
     * @return the auditory's name
     */
    public String getName() {
        return name;
    }

    /**
     * 
     * @param name the auditory's name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 
     * @return the auditory's owner
     */
    public String getOwner() {
        return owner;
    }

    /**
     * 
     * @param owner the auditory's owner
     */
    public void setOwner(String owner) {
        this.owner = owner;
    }

    /**
     * 
     * @return the auditory's capacity
     */
    public Integer getCapacity() {
        return capacity;
    }

    /**
     * 
     * @param capacity the auditory's capacity
     */
    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    /**
     * 
     * @return the auditory's description
     */
    public String getDescription() {
        return description;
    }

    /**
     * 
     * @param description the auditory's description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * 
     * @return the auditory's category
     */
    public Category getCategory() {
        return category;
    }

    /**
     * 
     * @param category the auditory's category
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    /**
     * 
     * @return the auditory's reservations
     */
    public List<Reservation> getReservations() {
        return reservations;
    }

    /**
     * 
     * @param reservations the auditory's reservations
     */
    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

}
