package dropshipping.com.service;

import dropshipping.com.model.Product;
import dropshipping.com.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Component
@ComponentScan("dropshipping.com.repository")
public class ProductService {

    @Autowired
    private ProductRepository repo;

    public List<Product> listAll(){ return repo.findAll();
    }
    public void save(Product product){
         repo.save(product);

    }
    public Product get (long id){
        return repo.findById(id).get();

    }
    public void delete (long id){
        repo.deleteById(id);
    }
}
