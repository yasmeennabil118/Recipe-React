import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className="bg-white absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <InfinitySpin
                visible={true}
                width="200"
                color="#F29724"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    )
}
