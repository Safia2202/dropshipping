package dropshipping.com.controller;
import dropshipping.com.model.Product;
import dropshipping.com.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ApplicationController {
    @Autowired
    private ProductService productService;

    @Autowired
    @GetMapping("")
    public String viewHowPage(){
        return "frontend/index";}

    @Autowired
    @RequestMapping("/detail")
    public String productDetail(Model model){
        List<Product> listProducts = productService.listAll();
        model.addAttribute("listProducts",listProducts);

        return "frontend/detail";}

//    @Autowired
//    @GetMapping("/cart")
//    public String cartDetail(){
//        return "frontend/cart";}
//
//    @Autowired
//    @GetMapping("/checkout")
//    public String checkOut(){
//        return "frontend/checkout";}
//
////admin
//    @Autowired
//    @GetMapping("admin")
//    public String adminAdmin(){
//        return "admin/index";}
//
//    @Autowired
//    @GetMapping("account")
//    public String adminAccount(){
//        return "admin/account";}
//    @Autowired
//    @GetMapping("addproduct")
//    public String adminAddProduct(){
//        return "admin/add-product";}
//    @Autowired
//    @GetMapping("editproduct")
//    public String adminEditProduct(){
//        return "admin/edit-product";}
//    @GetMapping("/login")
//    public String adminLogin(){
//        return "admin/login";}
//    @GetMapping("products")
//    public String adminProducts(){
//        return "admin/products";}
//


}
