package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Category;
import co.usa.reto3.reto3.repository.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getAll() {
        return categoryRepository.getAll();
    }

    public Optional<Category> getCategory(int id) {
        return categoryRepository.getCategory(id);
    }

    public Category save(Category newCategory) {
        // check if id is null
        if (newCategory.getId() == null) {
            return categoryRepository.save(newCategory);
        } else {
            Optional<Category> queryCategory = categoryRepository.getCategory(newCategory.getId());

            if (queryCategory.isEmpty()) {
                return categoryRepository.save(newCategory);
            } else {
                return newCategory;
            }
        }
    }

    public Category update(Category upCategory) {
        if (upCategory.getId() != null) {
            Optional<Category> queryCategory = categoryRepository.getCategory(upCategory.getId());
            if (!queryCategory.isEmpty()) {
                if (upCategory.getName() != null) {
                    queryCategory.get().setName(upCategory.getName());
                }

                if (upCategory.getDescription() != null) {
                    queryCategory.get().setDescription(upCategory.getDescription());
                }

                return categoryRepository.save(queryCategory.get());
            }
        }
        return upCategory;
    }

    public boolean deleteCategory(int id) {
        Optional<Category> queryCategory = categoryRepository.getCategory(id);
        if (!queryCategory.isEmpty()) {
            categoryRepository.delete(queryCategory.get());
            return true;
        }
        return false;
    }

}
