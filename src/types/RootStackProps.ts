import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen?: {item?: []};
  LoginScreen?: undefined;
  MovieScreen?: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

//   import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

// export type RootStackParamList = {
//   LoginScreen?: undefined;
//   RegistrationScreen?: undefined;
//   HomeScreen?: {categoryId?: string; index?: number; technicianId?: string};
//   ServiceScreen?: undefined;
//   BookingScreen?: {type?: string};
//   ChatListScreen?: undefined;
//   ProfileScreen?: undefined;
//   BecomeTechnicianSkillTestScreen?: undefined;
//   ExamNotAttemptScreen?: undefined;
//   SubmitAllServiceQuestionScreen?: undefined;
//   GeneralQuestionStartScreen?: {services?: []};
//   GeneralQuestionnaireScreen?: {services?: []};
//   GeneralQuestionCompletedScreen?: undefined;
//   BeforeStartQuizScreen?: undefined;
//   SkillTestCompleted?: undefined;
//   BookingSubmissionScreen?: {jobData?: {}};
//   CheckOutScreen?: {
//     formData: FormData;
//     amount_of_time?: number;
//     serviceAmount?: number;
//     type?: string;
//     total_amount?: number;
//     jobId?: string;
//     additionalWorkDetail?: [];
//     invoiceId?: string;
//   };
//   TaskDetailScreen?: {
//     jobId?: string;
//   };
//   WebViewScreen?: {
//     link?: string;
//     title?: string;
//     type?: string;
//     invoiceId?: string;
//   };
//   DashBoardScreen?: undefined;
//   WithdrawalHistoryScreen?: undefined;
//   RefundHistoryScreen?: undefined;
//   ChatScreen?: {jobId?: string; room_id?: string; receiver_id?: string};
//   FavoriteScreen?: undefined;
//   PaymentHistoryScreen?: undefined;
//   NotificationScreen?: undefined;
//   BecomeTechnicianFormScreen?: undefined;
//   BookingConfirmationScreen?: {
//     type?: string;
//     serviceType?: string;
//     imagePath?: [];
//     aboutService?: string;
//     jobId?: string;
//     categoryId?: string;
//     serviceAmount?: number;
//     technicianId?: string;
//   };
//   BecomeTechnicianWelcomeScreen?: undefined;
//   EditProfileScreen?: undefined;
//   TabStack: NavigatorScreenParams<TabStackParamList>;
//   Auth: NavigatorScreenParams<AuthStackType>;
//   TechTabStack: NavigatorScreenParams<TechTabStackParamList>;
//   ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
//   TaskStack: NavigatorScreenParams<TaskStackParamList>;
//   AppTourScreen?: {type?: string};
// };

// export type AuthStackType = {
//   LoginScreen?: undefined;
//   RegistrationScreen?: undefined;
// };

// export type ProfileStackParamList = {
//   ProfileScreen?: undefined;
//   EditProfileScreen?: undefined;
//   FavoriteScreen?: undefined;
//   PaymentHistoryScreen?: undefined;
//   WithdrawalHistoryScreen?: undefined;
//   RefundHistoryScreen?: undefined;
// };
// export type TabStackParamList = {
//   HomeScreen?: {categoryId?: string; index?: number; technicianId?: string};
//   ServiceScreen?: undefined;
//   BookingScreen?: undefined;
//   ChatListScreen?: undefined;
//   ProfileStack?: NavigatorScreenParams<ProfileStackParamList>;
// };

// export type TaskStackParamList = {
//   BookingScreen?: undefined;
//   TaskDetailScreen?: {jobId?: string};
// };

// export type TechTabStackParamList = {
//   DashBoardScreen?: undefined;
//   TaskStack?: NavigatorScreenParams<TaskStackParamList>;
//   ChatListScreen?: undefined;
//   ProfileStack?: NavigatorScreenParams<ProfileStackParamList>;
// };

// export type RootRouteProps<RouteName extends keyof RootStackParamList> =
//   RouteProp<RootStackParamList, RouteName>;
