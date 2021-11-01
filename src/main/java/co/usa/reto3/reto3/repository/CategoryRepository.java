package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.repository.crud.CategoryCrudRepository;
import co.usa.reto3.reto3.model.Category;

@Repository
public class CategoryRepository {

    @Autowired
    CategoryCrudRepository categoryCrudRepository;

    // Return all categorys
    public List<Category> getAll() {
        return (List<Category>) categoryCrudRepository.findAll();
    }

    public Optional<Category> getCategory(int id) {
        return categoryCrudRepository.findById(id);
    }

    public Category save(Category newCategory) {
        return categoryCrudRepository.save(newCategory);
    }

    public void delete(Category category) {
        categoryCrudRepository.delete(category);
    }
}
