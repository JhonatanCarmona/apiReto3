package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.repository.crud.ClientCrudRepository;
import co.usa.reto3.reto3.model.Client;

@Repository
public class ClientRepository {

    @Autowired
    private ClientCrudRepository clientCrudRepository;

    public List<Client> getAll() {
        return (List<Client>) clientCrudRepository.findAll();
    }

    public Optional<Client> getClient(int id) {
        return clientCrudRepository.findById(id);
    }

    public Client save(Client newClient) {
        return clientCrudRepository.save(newClient);
    }

    public void delete(Client client) {
        clientCrudRepository.delete(client);
    }

}
