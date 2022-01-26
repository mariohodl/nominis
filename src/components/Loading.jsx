import React from 'react'
import Loader from 'react-loader-spinner'

export function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Loader type="Puff" color="#00bfff" height={500} width={80} />
        </div>
    )
}
