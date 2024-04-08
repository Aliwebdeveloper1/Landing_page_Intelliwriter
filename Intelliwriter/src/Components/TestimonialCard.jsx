import React from 'react'

const TestimonialCard = () => {
  return (
    
    const TestimonialCard = ({ client }) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-sm p-6">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={client.image} alt={client.name} />
              </div>
            </div>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{client.review}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{client.name}</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        </div>
      );
      
      const Testimonials = ({ clients }) => (
        <div className="flex flex-wrap">
          {clients.map(client => (
            <TestimonialCard key={client.id} client={client} />
          ))}
        </div>
      )
    )
    
};

export default TestimonialCard