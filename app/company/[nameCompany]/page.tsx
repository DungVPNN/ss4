import React from 'react'

export default function page(props:any) {
    const {params}=props
    return (
      <div>
        Company name: {params.nameCompany}
      </div>
    )
}
