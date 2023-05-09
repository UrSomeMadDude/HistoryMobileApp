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
    fontWeight: '700',
    fontSize: 32,
  },
  h4: {
    fontWeight: '700',
    fontSize: 28,
  },
  h5: {
    fontWeight: '500',
    fontSize: 18,
    color: '#fff',
  },
  error: {
    fontWeight: 500,
    fontSize: 14,
    color: 'red',
  },
}

const TextStyled = (
  { children, variant },
  { ...props }
): ReactElement<React.FC> => {
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
        {...props}
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
