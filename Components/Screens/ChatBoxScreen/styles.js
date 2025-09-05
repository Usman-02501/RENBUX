import { Dimensions, StyleSheet } from 'react-native';
import { borderWidth, colors, fontSize, hp, radius, wp } from '../../constant';
 const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: colors.eerieBlack,
  },
  backButton: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: (width * 0.1) / 2,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: radius.radius7,
    backgroundColor: colors.darkGary,
    marginRight: wp(2),
  },
  backArrow: {
    fontSize: fontSize.large,
    color: colors.white,
    fontWeight: '300',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: wp(2),
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: fontSize.medium,
    color: colors.white,
    marginBottom: hp(0.2),
  },
  profileStatus: {
    fontSize: fontSize.regSmall,
    color: colors.quickSilver,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: wp(4),
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  dateSeparatorContainer: {
    alignItems: 'center',
    marginVertical: hp(2),
  },
  dateText: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: radius.radius1,
    backgroundColor: colors.darkCharcoal,
    fontSize: fontSize.regSmall,
    color: colors.quickSilver,
    borderWidth: borderWidth.normal,
    borderColor: colors.graniteGray,
  },
  messagesContainer: {
    paddingBottom: hp(2),
  },
  sentMessageContainer: {
    marginBottom: hp(2),
    backgroundColor: colors.pink,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    maxWidth: wp(90),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderTopEndRadius: radius.radius8,
    borderTopLeftRadius: radius.radius8,
    borderBottomLeftRadius: radius.radius8,
  },
  sentMessageBubble: {},
  sentMessageText: {
    fontSize: fontSize.small,
    color: colors.white,
    lineHeight: fontSize.small * 1.4,
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sentMessageTime: {
    fontSize: fontSize.extraSmall,
    color: colors.whiteShade,
    opacity: 0.8,
    marginRight: wp(1),
  },
  receivedMessageContainer: {
    backgroundColor: colors.charlestonGreen1,
    alignItems: 'flex-start',
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    maxWidth: wp(75),
    borderTopEndRadius: radius.radius8,
    borderTopLeftRadius: radius.radius8,
    borderBottomRightRadius: radius.radius8,
  },
  receivedMessageText: {
    fontSize: fontSize.small,
    color: colors.white,
    lineHeight: fontSize.small * 1.4,
    marginBottom: hp(0.5),
  },
  receivedMessageTime: {
    fontSize: fontSize.extraSmall,
    color: colors.quickSilver,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    marginHorizontal: wp(4),
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.RaisinBlack,
    borderRadius: radius.radius5,
    paddingHorizontal: wp(4),
    minHeight: hp(6),
    marginBottom: hp(1),
    borderWidth: borderWidth.normal,
    borderColor: colors.graniteGray,
  },
  textInput: {
    flex: 1,
    fontSize: fontSize.small,
    color: colors.white,
  },
  micButton: {
    justifyContent: 'center',
  },
  sendButton: {
    justifyContent: 'center',
    marginLeft: wp(2),
  },
});
