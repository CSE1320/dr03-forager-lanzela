########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Laurencia Anzela
SID = 1002129752
EMAIL = lxa9752@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT = PROJ03
YOUTUBEURL = https://youtu.be/F82rYef16Bg
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"

	