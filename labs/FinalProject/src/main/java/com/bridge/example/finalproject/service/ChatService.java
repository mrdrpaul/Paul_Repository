package com.bridge.example.finalproject.service;

import com.bridge.example.finalproject.entity.ChatEntity;
import com.bridge.example.finalproject.repository.ChatRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    private static final Logger log = LoggerFactory.getLogger(ChatService.class);

    private final ChatRepository chatRepository;

    public ChatService(ChatRepository chatRepository){
        this.chatRepository = chatRepository;
    }

    public ChatEntity addNewChat(ChatEntity chat){
        return chatRepository.save(chat);
    }

    public List<ChatEntity> getAllChats(){return chatRepository.findAll();}


}
