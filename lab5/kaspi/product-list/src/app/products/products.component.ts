import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product.model';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories=['iphone 13','iphone 14','iphone 15','iphone 16'];
  selected='iphone 13';
  products: Product[] = [
    {
      id:1,
      category:'iphone 16',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb серебристый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета',
      imageUrls: ['assets/sixth.jpeg'],
      rating: 4.0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000'
    },
    {
      id:2,
      category:'iphone 16',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      imageUrls: ['assets/second.jpeg'],
      rating: 4.5,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      id:3,
      category:'iphone 14',
      name: 'Смартфон Apple iPhone 14  256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      imageUrls: ['assets/third.jpeg'],
      rating: 4.5,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      id:4,
      category:'iphone 14',
      name: 'Смартфон Apple iPhone 14 128Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      imageUrls: ['assets/fourth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      id:5,
      category:'iphone 13',
      name: 'Смартфон Apple iPhone 13 128Gb синий',
      description: 'Apple разработали совершенно новую схему расположения камер и развернули объективы',
      imageUrls: ['assets/fiftth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000'
    },
    {
      id:6,
      category:'iphone 13',
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      description: 'Новая сверхширокоугольная камера видит больше деталей в темных областях снимка.',
      imageUrls: ['assets/sixth.jpeg'],
      rating: 4.9,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },
    {
      id:7,
      category:'iphone 16',
      name: 'Смартфон Apple iPhone 16 Pro 128Gb серебристый',
      description: ' Это флагманская модель линейки iPhone которая подчеркивает ваши неограниченные возможности.',
      imageUrls: ['assets/fiftth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000'
    },
    {
      id:8,
      category:'iphone 15',
      name: 'Смартфон Apple iPhone 15 128Gb голубой',
      description: 'Смартфон получил динамический остров, на который выводятся уведомления.',
      imageUrls: ['assets/tenth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    },
    {
      id:9,
      category:'iphone 15',
      name: 'Смартфон Apple iPhone 15 Pro 128Gb серый',
      description: 'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали.',
      imageUrls: ['assets/ninth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=750000000'
    },
    {
      id:10,
      category:'iphone 15',
      name: 'Смартфон Apple iPhone 15  128Gb белый',
      description: 'Это флагманская модель линейки iPhone которая подчеркивает ваши неограниченные возможности.',
      imageUrls: ['assets/tenth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-belyi-123888540/?c=750000000'
    },

  ];

likeProduct(id:number){
  for(var i=0;i<this.products.length;i++){
    if(this.products[i].id==id){
      this.products[i].likes+=1;
    }
  }
}
removeProduct(id:number){
  var newProducts=[]
  for(var i=0;i<this.products.length;i++){
    if(this.products[i].id!=id){
      newProducts.push(this.products[i]);
    }
  }
  this.products=newProducts
}

getfilteredProducts(){
  var filteredProducts=[]
  for (var i=0;i<this.products.length;i++){
    if(this.products[i].category==this.selected){
      filteredProducts.push(this.products[i]);
    }
  }
  return filteredProducts
}
selectCategory(event:any){
  this.selected=event?.target.value;
}



  shareOnWhatsApp(phone: string='+77756553005', link: string='Hello'): void {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent('Посмотрите: ' + link)}`, '_blank');
  }
  
  shareOnTelegram(usernameOrGroup: string = 'odinelit', link: string='Hello'): void {
    window.open(
      `https://t.me/${usernameOrGroup}?text=${encodeURIComponent('Посмотрите: ' + link)}`,
      '_blank'
    );
  }
  
  
  
  
}