package com.gurunath.service;

import com.gurunath.entity.Product;
import com.gurunath.exception.ProductNotFoundException;
import com.gurunath.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product register(Product product){
      return  productRepository.save(product);
    }

    public List<Product> productList(){
        return productRepository.findAll();
    }

    public Product productById(int id){
        return productRepository.findById(id).orElseThrow(()-> new ProductNotFoundException(id));
    }

    public Product update(int id,Product product){
        return productRepository.findById(id).map(prod->{
            prod.setCategory(product.getCategory());
            prod.setDescription(product.getDescription());
            prod.setPrice(product.getPrice());
            prod.setProductName(product.getProductName());
            return productRepository.save(prod);
        }).orElseThrow(()-> new ProductNotFoundException(id));
    }

    public String delete(int id){
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
        productRepository.delete(product);
        return "Product deleted!!";
    }
}
