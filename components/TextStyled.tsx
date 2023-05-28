import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'

interface IFontProps {
  fontWeight: string
  fontSize: Number
  color?: string
  lineHeight?: number
}

interface ITextVariants {
  regular: IFontProps
  h2: IFontProps
  h5: IFontProps
  h4: IFontProps
  error: IFontProps
  sectionTitle: IFontProps
  sectionOption: IFontProps
  headerTitle: IFontProps
  lessonTitle: IFontProps
  profileName: IFontProps
}

const textVariants: ITextVariants = {
  regular: {
    fontWeight: '400',
    fontSize: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    lineHeight: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#40005E',
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#313131',
    lineHeight: 24,
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
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  sectionOption: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1362CF',
    lineHeight: 17.05,
  },
  error: {
    fontWeight: '500',
    fontSize: 14,
    color: 'red',
  },
}

interface ITextStyled {
  children: ReactNode
  variant: string
}

const TextStyled: React.FC<ITextStyled> = (
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
