---
layout: school
---

*This a place for me to post schoolwork*

# _Converting docs_
The following is a paper I wrote for my last philosophy class in college, a long long time ago in the Spring of 2009. The class was devoted to the correspondence between Gottfried Wilhelm Leibniz: ![leibniz](https://upload.wikimedia.org/wikipedia/commons/6/6a/Gottfried_Wilhelm_von_Leibniz.jpg)
and Samuel Clarke, a supporter of Isaac Newton. ![newton](https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg)  

It has been a while so I don't entirely remember what the paper is about, but I think it has something to do with Leibniz's philosophical foundations for physical science, and how it appears in a prominent debate with a Newtonian.   

I have posted the document in various file formats. I began with a [markdown version of my document](/school/md/index.md), and converted it to html, docx, odt and a pdf by using the following [bash script](https://raw.githubusercontent.com/inls161/assignment-3-convert-some-documents-jonpage3/master/jonpage3-convert-docs.sh)

*  [HTML](/school/html)
*  [DOCX](https://github.com/inls161/assignment-3-convert-some-documents-jonpage3/raw/master/Leibniz-Newton-final-paper.docx)
*  [PDF](https://github.com/inls161/assignment-3-convert-some-documents-jonpage3/raw/master/Leibniz-Newton-final-paper.pdf)
*  [ODT](https://github.com/inls161/assignment-3-convert-some-documents-jonpage3/raw/master/Leibniz-Newton-final-paper.odt)



# *Organizing Data*

In my *Tools for Information Literacy Class* we were assigned the task of creating a questionnaire that responds to user input and stores data (a user's answers to the questionnaire) in a database. Working as a team (team1), two of my fellow classmates and yours truly devised the following bash script that generates a CSV file of the answers given by the respondent(s): [CSV bash script](https://raw.githubusercontent.com/healeyj/task-5-database-interface/master/team1questions.sh)
Then, we amended that script so that when a user finishes the questionnaire, a mysql database is generated to store the user's answers. The information from this database is also stored in a newly created .sql file. Here is that [mysql questionnaire bash script.](https://raw.githubusercontent.com/healeyj/task-5-database-interface/master/team1mysql.sh)   

So in conclusion, the final script generates a questionnaire, responds to answers given to the questionnaire, and then stores those answers in a CSV file, mysql database and sql file.  
For more information here is a link to the [github repository](https://github.com/healeyj/task-5-database-interface) for my team's project.
