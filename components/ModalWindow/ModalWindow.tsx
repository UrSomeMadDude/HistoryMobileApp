import { View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import {
  optionsListFirst,
  optionsListSecond,
} from '../../screens/HistoryScreen/styles'
import TextStyled from '../TextStyled'

import Modal from 'react-native-modal'

interface ModalProps {
  isVisible: boolean
  onClose?: () => void
  onAction?: () => void
  options?: string[]
}

const ModalWindow: React.FC<ModalProps> = ({
  isVisible,
  onAction,
  onClose,
  options = [],
}) => {
  return (
    <Modal
      propagateSwipe={true}
      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      <View style={styles.modalView}>
        <ScrollView>
          {options.map((option, i) => (
            <TouchableOpacity
              key={i}
              onPress={onAction}
              style={{
                marginBottom: 15,
              }}
            >
              <TextStyled variant="sectionOption">
                *{'   '}
                {option}
              </TextStyled>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  )
}

export default ModalWindow
