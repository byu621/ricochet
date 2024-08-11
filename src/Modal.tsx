import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

function Modal() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>?</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-md space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Help</DialogTitle>
            <p>Your aim is to capture the pokemon with the targeted ball. <br/>
             Select the ball you would like to move then use the up, down, left, right keys to  <br/>
              move the ball in that direction. 
             The number of moves is tracked, and your aim is to capture the pokemon <br/> in the least
             amount of moves. 
             Remember you can move other balls to assist you.
             </p>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default Modal;