import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул зеленый',
          img: 'green-chair.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
          category: 'couch',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'white-chair.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '69.00'
        },
        {
          id: 6,
          title: 'Бинбег',
          img: 'beanbag.webp',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
          category: 'beanbag',
          price: '69.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items 
    this.addToOrder = this.addToOrder.bind(this) // Совем не понял код
    this.deleteOrder = this.deleteOrder.bind(this) // Совем не понял код
    this.chooseCategory = this.chooseCategory.bind(this) // Совем не понял код
    this.onShowItem = this.onShowItem.bind(this) // Совем не понял код
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} /> {/* Совсем не понял код */}
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );

  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }) // Совем не понял код // урок 5
  }
}

export default App;
