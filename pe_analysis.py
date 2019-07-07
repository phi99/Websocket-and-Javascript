import pefile 
import argparse 
import sys 
 
input_file=sys.argv[1]
pe=pefile.PE(input_file) 
 
for section in pe.sections: 
    print("Sections:{}, Virtual Address:{}\n".format(section.Name,hex(section.VirtualAddress)))   
 
print("-------------------------------------------") 
print("               IAT LIST") 
print("-------------------------------------------") 
 
for entry in pe.DIRECTORY_ENTRY_IMPORT: 
    print entry.dll 
    for function in entry.imports: 
        print '\t',function.name
                                                               45        1,1           All
