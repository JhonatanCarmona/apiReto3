package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Message;
import co.usa.reto3.reto3.repository.MessageRepository;

@Service
public class MessageService {
    @Autowired
    MessageRepository messageRepository;

    public List<Message> getAll() {
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return messageRepository.getMessage(id);
    }

    public Message save(Message newMessage) {
        // check if id is null
        if (newMessage.getIdMessage() == null) {
            return messageRepository.save(newMessage);
        } else {
            Optional<Message> queryMessage = messageRepository.getMessage(newMessage.getIdMessage());

            if (queryMessage.isEmpty()) {
                return messageRepository.save(newMessage);
            } else {
                return newMessage;
            }
        }
    }
}
