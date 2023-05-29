import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  lidMagnet: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: 377,
    minWidth: 300,
    height: 66,
    paddingLeft: 15,
    borderRadius: 14,
    backgroundColor: '#fff',
    boxShadow: '0px 10px 20px rgba(0, 18, 38, 0.03)',
    gap: 5,
  },
  lidMagnetText: {
    color: '#2142CE',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.5,
  },

  subtext: {
    color: '#847B89',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 12,
  },

  lidMagnetAlternative: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    maxWidth: 377,
    minWidth: 300,
    height: 66,
    paddingLeft: 15,
    borderRadius: 14,
    backgroundColor: '#fff',
    boxShadow: '0px 10px 20px rgba(0, 18, 38, 0.03)',
    gap: 5,
  },
})
