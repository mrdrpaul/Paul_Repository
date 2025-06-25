package com.bridge.example.finalproject.controller;

import com.bridge.example.finalproject.entity.ChatEntity;
import com.bridge.example.finalproject.service.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService){this.chatService=chatService;}

    @PostMapping("/sendMessage")
    public ResponseEntity<ChatEntity> addNewChat(@RequestBody ChatEntity chat){
        return ResponseEntity.ok(chatService.addNewChat(chat));
    }

    @GetMapping("/getMessages")
    public ResponseEntity<List<ChatEntity>> getAllChats(){return ResponseEntity.ok(chatService.getAllChats());}

}
