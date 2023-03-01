import React from 'react'
import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { MdCreate, MdSearch, MdFavoriteBorder } from 'react-icons/md'
import Container from 'react-bootstrap/Container'
import CreateSplitModal from './components/CreateSplitModal'
//import connectDB from './db/connect'

function App() {
  const [showCreateSplitModal, setShowCreateSplitModal] = useState(false)

  // const connectData = async () => {
  //   try {
  //     await connectDB(process.env.MONGO_URI)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // connectData()

  return (
    <>
      <Container className=''>
        <Stack
          direction='vertical'
          gap='2'
          style={{ width: '200px' }}
          className='mx-auto my-auto'
        >
          <Button
            variant='primary'
            className='btn-lg'
            onClick={() => setShowCreateSplitModal(true)}
          >
            <MdCreate />
            &nbsp;Create Split
          </Button>
          <Button
            variant='primary'
            className='btn-lg'
            onClick={() => console.log('SEARCH')}
          >
            <MdSearch />
            &nbsp;Search Split
          </Button>
          <Button
            variant='primary'
            className='btn-lg'
            onClick={() => console.log('show splits')}
          >
            <MdFavoriteBorder />
            &nbsp;Your Splits
          </Button>
        </Stack>
      </Container>
      <CreateSplitModal
        show={showCreateSplitModal}
        onHide={() => setShowCreateSplitModal(false)}
      />
    </>
  )
}

export default App
