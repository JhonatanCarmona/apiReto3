package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.repository.ClientRepository;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;

    public List<Client> getAll() {
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id) {
        return clientRepository.getClient(id);
    }

    public Client save(Client newClient) {
        // check if id is null
        if (newClient.getIdClient() == null) {
            return clientRepository.save(newClient);
        } else {
            Optional<Client> queryClient = clientRepository.getClient(newClient.getIdClient());

            if (queryClient.isEmpty()) {
                return clientRepository.save(newClient);
            } else {
                return newClient;
            }
        }
    }
}
