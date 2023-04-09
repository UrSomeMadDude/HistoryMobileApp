import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'

interface IFontProps {
  fontWeight: string
  fontSize: Number
}

interface ITextVariants {
  regular: IFontProps
  h2: IFontProps
  h5: IFontProps
}

const textVariants: ITextVariants = {
  regular: {
    fontWeight: '400',
    fontSize: 16,
  },
  h2: {
    fontWeight: '500',
    fontSize: 36,
  },
  h5: {
    fontWeight: '500',
    fontSize: 18,
    color: '#fff',
  },
}

const TextStyled = ({ children, variant }): ReactElement<React.FC> => {
  return (
    <View>
      <Text
        style={[
          styles.mainText,
          {
            fontSize: textVariants[variant].fontSize,
            fontWeight: textVariants[variant].fontWeight,
            color: textVariants[variant].color,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

export default TextStyled

const styles = StyleSheet.create({
  mainText: {
    fontFamily: 'commissioner-regular',
  },
})
