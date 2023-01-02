import React from 'react'
import image4 from "../Image/image4.jpeg"
import image5 from "../Image/image5.jpeg"
import image6 from "../Image/image6.jpeg"
import image7 from "../Image/image7.jpeg"
import image8 from "../Image/image8.jpeg"
import image11 from "../Image/image11.jpeg"
import image12 from "../Image/image12.jpeg"
import image13 from "../Image/image13.jpeg"
import image14 from "../Image/image14.jpeg"
import image15 from "../Image/image15.jpeg"
import image16 from "../Image/image16.jpeg"
import image17 from "../Image/image17.jpeg"
import image18 from "../Image/image18.jpeg"
import image19 from "../Image/image19.jpeg"
import image20 from "../Image/image20.jpeg"
import image21 from "../Image/image21.jpeg"



const memberList = [
  {
    id: 1,
    name: 'Satya Narayan Sharma',
    designation: 'President',
    img: image4
  },
  {
    id: 2,
    name: 'Anil Sharma',
    designation: 'Joint-President',
    img: image13
  },
  {
    id: 3,
    name: 'Sachin Chauhan',
    designation: 'Senior State Vice-President',
    img: image18
  },
  {
    id: 4,
    name: 'Ashok Bhardwaj',
    designation: 'State Vice-President',
    img: image17
  },
  {
    id: 5,
    name: 'Ganesh Bhardwaj',
    designation: 'State Spoke-Person',
    img: image21
  },
  {
    id: 5,
    name: 'Santosh Kumar Gupta',
    designation: 'State Secretary',
    img: image20
  },
 
  {
  id:11,
  name: 'Anjum Manohar',
  designation: 'Cultural-Secretary',
  img: image8
},
{
  id: 9,
  name: 'Sanjay Sharma',
  designation: 'Working Bhind District President',
  img: image6
},
  {
    id: 4,
    name: 'Anil Chaudhary',
    designation: 'District Secretary',
    img: image12
  },
  {
    id: 5,
    name: 'Shailendra Mishra',
    designation: 'District  Joint-Secretary',
    img: image14
  },
  
  {
    id: 6,
    name: 'Deependra Bohare',
    designation: 'District  Vice-President',
    img: image11
  },
  {
    id: 7,
    name: 'Ravindra Bohre',
    designation: 'District Vice-President',
    img: image15
  },
  {
    id: 8,
    name: 'Bharat Singh Rawat',
    designation: 'District Vice-President',
    img: image16
  },
  
  {
    id: 10,
    name: 'Banavari lal Soni',
    designation: 'Sheopur District President',
    img: image19
  },

 
  {
    id: 12,
    name: 'Pradeep bajpai',
    designation: 'Member',
    img: image7
  },
  {
    id: 13,
    name: 'Sachin Yadav',
    designation: 'Member',
    img: image5
  },
]
const Members = () => {
  return (
    <>
      <h1 className='text-center text-success my-5'>Members </h1>
      <div className='container'>
        <div className='row'>
          {memberList.map((x, i) => {
            return <div className="col-xs-10 col-sm-6 col-lg-3 col-md-4 " style={{marginBottom:'15px'}}>
              <div >
                <div style={{ textAlign: 'center', }}>
                  <img alt='member' src={x.img} style={{ width: '200px', height: '250px', borderRadius: '8px',border:'2px solid #D3D3D3' }} />
                  <p style={{fontWeight:'700',fontSize:'16px',letterSpacing:'1',}}>{x.name}</p>
                  <p style={{fontWeight:'600',fontSize:'14px',letterSpacing:'1',}}>{x.designation}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
}
export default Members