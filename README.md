# Panoramic-Exhibition-Hall
## Abstract
This project is for the Shenzhen Veteran Cadres Bureau to celebrate the 40th anniversary of the establishment of the Shenzhen Special Economic Zone. The calligraphy and painting works made by the cadres of the Veteran Cadres Bureau to celebrate the 40th anniversary of the establishment of the Shenzhen Special Economic Zone are presented using a virtual calligraphy and painting exhibition scene combined with panoramic roaming technology, based on the Web and Promote in the form of WeChat public account.

## Keywords
Human-computer interaction,3DsMax,Vray,Pano,Panoramic tour
<p align="center">
  <img src ="https://github.com/30382716ZhiPang/Panoramic-Exhibition-Hall/assets/91645493/5a38a553-c2a5-4ff0-a07a-3096dad2f827" style="width: 500px"; alt="Sublime's custom"/>
    <img src ="https://github.com/30382716ZhiPang/Panoramic-Exhibition-Hall/assets/91645493/335b8fbc-ede7-4499-9181-433d1c380237" style="width: 500px"; alt="Sublime's custom"/>
<p>
<p align="center">
Fig. 1. Screenshot of project running
<p>
 
### I. SCENE DESIGN
The design of the virtual exhibition hall is based on the Arabic numeral 40. As an element to celebrate the 40th anniversary of the establishment of the Shenzhen Special Economic Zone, the virtual exhibition hall was built using 3DMax modeling software. Painting and calligraphy works are roughly divided into three categories: calligraphy, traditional Chinese painting, and photography. The scenes need to be divided according to the classification of the work and the author, and then the corresponding calligraphy and painting works are placed according to the divided areas and the work list.

<p align="center">
  <img src ="https://github.com/30382716ZhiPang/Panoramic-Exhibition-Hall/assets/91645493/2cc30db8-2664-461e-a372-51d66351bad7" style="width: 350px"; alt="Sublime's custom"/>
<p>
<p align="center">
Fig. 2.	Scene design drawing
<p>
 

### II.	SKIN DESIGN
The essence of panoramic roaming is the interaction and switching of each panorama. For the switching of exhibition hall scenes, that is, the switching of panoramas, what needs to be designed is the jump hotspot of the scene. By clicking the jump hotspot to interact, the effect of switching panorama can be achieved. , this requires the design of the style of the jump hotspot of the scene and the implementation of the jump function logic. We choose to use arrows as the logo for the jump hotspot style, giving the brown color consistent with the overall tone of the calligraphy and painting exhibition hall, and the jump function logic is set by In the action panel of the skin, specify the mouse click source, set the action to open the next panorama, and set the panorama URL and view to complete. As an indispensable factor for panoramic roaming, the small map located in the upper left corner also has corresponding landmark signs to complete the jump function. At the same time, taking into account the user's operability, "Previous" and "Previous" are designed on the left and right sides and the bottom navigation respectively. "Next" buttons are used to quickly jump to the function, which can better complete the roaming process of the exhibition hall.

After a rough tour of the exhibition hall, we need to interact with the works. However, we first consider how the experiencer can quickly locate the calligraphy and painting works they want to see. At this time, a list of works is needed for better positioning. The skin design of the work list also requires a jump interaction for the panoramic front view of each work. The list is presented in a drop-down box menu that allows the experiencer to scroll down and browse. Based on the number of works, it is designed into multiple pages. Through the left and right sides Use the arrow buttons to turn pages. Each element in the list will be distinguished according to the label of the panorama whether it is an overall roaming panorama or a panoramic front view of the work. Finally, various information about the panoramic front view of all works will be copied by elements. The rectangular block is presented in the work list as a container, and each rectangular block also completes the work jumping function according to the action setting method of the jump hotspot. The way to open the work list is to open and close it through the "Work List" item in the bottom navigation. When jumping to any scene, the work list will automatically close.

### III. BACKSTAGE DESIGN
#### 1. Backend function design
Main functions of the backend: providing image upload interface, calligraphy and painting works upload/retrieval interface, audio upload/retrieval interface, and email notification service.
#### 2. Backstage of the work
Mainly manage the 209 works in a unified manner and classify them according to the type of works. Design a database that can be called by the web page, including: title of work, picture of work, category of work, voice introduction, etc.
Images and audio are stored in oss object, using Qiniu Cloud's php-sdk, and introduced into laravel to provide object storage upload interface authentication and other services.
The calligraphy and painting works upload interface mainly provides the description of the specified calligraphy and painting works and the binding of image links, and returns relevant information by obtaining the calligraphy and painting works with the specified ID.
#### 3. Email backend
The email notification service uses the SMS sending service that comes with the laravel framework. Through this interface, user feedback information is sent to the administrator's mailbox.
If there is a service that only needs SMS sending service, you can implement this interface without using laravel service. It only takes a few dozen lines of code to write an email sending interface using PHP natively.
It is worth noting that some SMTP sending servers do not support sending from the Alibaba Cloud encrypted port (default port). In this case, you need to change the communication port of the sending service and open the port on Alibaba Cloud's WAF.
#### 4. Website backend
Object storage uses the service of Qiniu Cloud, which can put some large resources on CDN for acceleration. In this way, when users access this resource, it will not occupy the server bandwidth, which can improve the response speed of the server and the user access experience.

## Precautions
The copyright of the project belongs to the team. Secondary development or commercial use is prohibited without explicit authorization. This includes the use and distribution of source code, documentation, graphics, audio and other related materials. Violation of this provision may result in legal consequences. Please be sure to comply with intellectual property laws and related regulations.
