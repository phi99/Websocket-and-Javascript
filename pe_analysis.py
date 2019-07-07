import pefile
import sys

input_file=sys.argv[1]#input_file = args.INPUT_FILE 
print(input_file) 
type(input_file)
pe=pefile.PE(input_file)

for section in pe.sections:
  print (section.Name, hex(section.VirtualAddress),
    hex(section.Misc_VirtualSize), section.SizeOfRawData )

for entry in pe.DIRECTORY_ENTRY_IMPORT:
    print entry.dll
    for function in entry.imports:
        print '\t',function.name
