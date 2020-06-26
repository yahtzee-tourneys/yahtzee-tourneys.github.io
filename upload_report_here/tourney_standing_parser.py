import pandas as pd
import glob

# Grab .txt file with 'Yahtzee' in file name

file = glob.glob('Yahtzee*.txt')

# Read through each line in file
# and append it to a list called 'lines'

lines = []  

with open (file[0], 'rt') as file:    
    
    for line in file:       
        
        lines.append(line.rstrip('\n'))
        
# Read through each line in 'lines'
# and append index number for each line
# containing ':'

indices = []

for index in range(len(lines)):
    
    if pd.Series(lines[index]).str.contains(':').any():
        
        indices.append(index)
        
# Find last ':' in order to define start
# of wins/losses to be reported

last_colon_index = indices[-1]
report_start_index = int(last_colon_index) + 1

# Write parsed tourney standing report to .txt file

with open('tourney_standing_report.txt', 'w') as filehandle:
    
    for line in lines[report_start_index:]:
        
        filehandle.write('%s\n' % line.replace(' ', ''))
        
# Sort 'tourney_standing_report.txt' by number of 'Wins'
# in descending order and export as 'tourney_standing_report.csv',
# which will power our website

df = pd.read_csv('tourney_standing_report.txt').sort_values('Wins', ascending = False)
df.to_csv('tourney_standing_report.csv')
