import React from 'react'

function CardItemDetail(props) {
    return (
        <>
            <div className="card text-center mt-5 shadow" key={props.id}>
                <img className='mx-auto' width={200} height={200} src={props.src} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Id:{props.id}</h5>
                    <h5 className="card-title">Name:{props.name}</h5>
                </div>
            </div>
        </>
    )
}

export default CardItemDetail;