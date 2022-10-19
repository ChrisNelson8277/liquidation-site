import React from 'react'
import ImageSlider2 from '../ImageSlider2'
import './admincard.css'
import EditListingModal from './EditListingModal'
import './adminmodal.css'

function AdminCard(props) {
    var styles = {
        backgroundImage: `url(${props.image})`
    }
    const slides = [
        {url: props.image, title: "Picture"},
    ]
    function handleModal(){
        const itemData = [
            {name: props.name,

    }]
    }
  return (
    <div className='admin-card'>
        {/* <EditListingModal key={props.id} id={props.id} image={props.image} name={props.title} description={props.description} price={props.price} condition={props.condition} category={props.category}/> */}
            <h1>{props.name}</h1>
        <div className='admin-image'>
            <ImageSlider2 slides={slides}/>
            <div className='overlay'>
                <div className='text' onClick={() => {
                    props.setItemInfo(props);
                    props.setOpenModal("true")
                }}>
                
                Edit Listing
                </div>
            </div>
            {/* <img src={props.image} alt="product"></img> */}
        </div>
    </div>
  )
}

export default AdminCard