/* 
#### This file defines the props for the ScrollToSection component ##### 
############################# WARNING! #################################
########## This file only contains the type for scrolling. #############
############# Please do not use it for other purposes. #################
*/

export interface ScrollToSectionProps {
    scrollToSection: (id: string) => void;
}
