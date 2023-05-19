import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'

const AddToCard = () => {

    const { data: cards = [], isLoading, refetch } = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const res = await fetch('https://web-arts-fact-server-site.vercel.app/addtocard')
            const data = await res.json()
            return data
        }
    })

    // console.log(cards)

    const handleDelate = card => {
        // console.log(card._id)
        fetch(`https://web-arts-fact-server-site.vercel.app/addtocard/${card._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.warning("Package Deleted")
                }
            })
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='px-20 py-10 mb-36'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    {
                        cards.length > 0 ?
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            :
                            <div className='font-bold text-xl text-center'>Please Buye a Packages</div>
                    }
                    <tbody>

                        {
                            cards.map(card => (
                                <tr key={card._id}>
                                    <td><button onClick={() => handleDelate(card)} className='btn btn-error btn-sm'>x</button></td>
                                    <td>{card.name}</td>
                                    <td>{card.price}</td>
                                    <td><button className='btn btn-primary btn-sm'>Pay</button></td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AddToCard