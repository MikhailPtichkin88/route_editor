import { AddressItem } from '@/ui/AddressItem'
import { Loader } from '@/ui/PageLoader'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import { useDeleteAddress } from '../query/useDeleteAddress'
import cls from './AddressList.module.scss'
import { useUpdateAddressList } from '../query/useUpdateAddressList'
import { IAddressItem } from '@/modules/MapAddressList'

interface IProps {
  addressList: IAddressItem[]
  setAddressList: (items: IAddressItem[]) => void
  isFetching?: boolean
}

export const AddressList = ({
  addressList,
  isFetching = false,
  setAddressList,
}: IProps) => {
  const { deleteAddress, isPending: isDeleting } = useDeleteAddress()

  const { updateList, isPending: isUpdating } = useUpdateAddressList({
    setAddressList,
  })

  const isLoading = isFetching || isDeleting || isUpdating

  const handleDragEnd = (result: DropResult) => {
    if (result.source.index === result.destination.index) {
      return
    }
    const updatedList = [...addressList]
    const [removedItem] = updatedList.splice(result.source.index, 1)
    updatedList.splice(result.destination.index, 0, removedItem)

    updateList(updatedList)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div
            className={cls.wrapper}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {isLoading && (
              <div className={cls.loader}>
                <Loader />
              </div>
            )}

            {!addressList?.length && <p className="p-2">Нет данных</p>}
            {addressList?.map(({ address, id }, index) => (
              <Draggable key={id} draggableId={String(id)} index={index}>
                {(provided) => (
                  <AddressItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    key={id}
                    id={String(id)}
                    onDelete={deleteAddress}
                    title={address}
                    disabled={isFetching}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}