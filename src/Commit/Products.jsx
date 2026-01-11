import React from 'react'
import BottleViewer from './BottleViewer'

const products = [
  {
    id: 1,
    name: 'Mojito',
    price: '₹20',
    color: '#c4af10',
  },
  {
    id: 2,
    name: 'Grape',
    price: '₹20',
    color: '#6a1b9a',
  },
  {
    id: 3,
    name: 'Green',
    price: '₹20',
    color: '#00bfa5',
  },
]

export default function Products() {
  return (
    <main className="bg-[#f7f8f5] min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#e5e7eb]"
            >
              {/* 3D MODEL */}
              <div className="h-[420px] bg-[#f3f4f6]">
                <BottleViewer color={product.color} />
              </div>

              <div className="p-8">
                <h3 className="text-lg font-medium text-[#1f2933]">
                  {product.name}
                </h3>
                <p className="mt-2 text-base text-[#4b5563]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
