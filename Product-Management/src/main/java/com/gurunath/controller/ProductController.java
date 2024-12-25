package com.gurunath.controller;

import com.gurunath.entity.Product;
import com.gurunath.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("http://localhost:3000")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/register")
    public ResponseEntity<Product> registerProduct(@RequestBody Product product){
        return new ResponseEntity<>(productService.register(product), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Product>> productList(){
        return ResponseEntity.ok(productService.productList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> productById(@PathVariable int id){
        return ResponseEntity.ok(productService.productById(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable int id,@RequestBody Product product){
        return ResponseEntity.ok(productService.update(id,product));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,String>> delete(@PathVariable int id){
        Map<String,String> map=new HashMap<>();
        map.put("DeleteMessage", productService.delete(id));
        return ResponseEntity.ok(map);
    }
}
